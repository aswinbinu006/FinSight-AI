# -*- coding: utf-8 -*-
"""
FinSight AI -- Model Training & Serialization Script
=====================================================
Run this script ONCE before deploying the backend.
It trains all 4 models and saves them as .pkl files
so the FastAPI server can load them instantly (~1s)
instead of retraining every cold start (~30-60s).

Usage:
    cd src
    python -m finsight_models_production.train_and_save_models

Output:
    src/finsight_models_production/saved_models/
        health.pkl
        waste.pkl
        goal.pkl
        cluster.pkl
"""

import os
import sys
import time
import json
from pathlib import Path

# Ensure the parent package is importable
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from finsight_models_production.health_model import HealthModel
from finsight_models_production.waste_model import WasteModel
from finsight_models_production.goal_model import GoalModel
from finsight_models_production.cluster_model import ClusterModel
from finsight_models_production.behavioral_scoring import BEHAVIOR_COLUMNS

# -- Output directory --
SAVE_DIR = Path(__file__).parent / "saved_models"
SAVE_DIR.mkdir(parents=True, exist_ok=True)

# -- Default behavioral scores for verification --
DEFAULT_SCORES = {col: 5.0 for col in BEHAVIOR_COLUMNS}

# ==================================================================
# TRAINING + SAVING
# ==================================================================

def separator(text: str):
    print(f"\n{'=' * 60}")
    print(f"  {text}")
    print(f"{'=' * 60}")


def train_health():
    separator("HEALTH MODEL -- Training")
    model = HealthModel()
    t0 = time.time()
    metrics = model.train()
    elapsed = time.time() - t0
    print(f"  [OK] Trained in {elapsed:.2f}s")
    print(f"  [OK] Best Score Model: {metrics.get('best_score_model', 'N/A')}")
    print(f"  [OK] Score RMSE: {metrics.get('score_rmse', 'N/A')}")
    print(f"  [OK] Score R2:   {metrics.get('score_r2', 'N/A')}")
    print(f"  [OK] Best Trend Model: {metrics.get('best_trend_model', 'N/A')}")
    print(f"  [OK] Trend F1 Macro: {metrics.get('trend_f1_macro', 'N/A')}")

    filepath = SAVE_DIR / "health.pkl"
    model.save(str(filepath))
    size_mb = filepath.stat().st_size / (1024 * 1024)
    print(f"  [OK] Saved to {filepath} ({size_mb:.2f} MB)")
    return model, metrics


def train_waste():
    separator("WASTE MODEL -- Training")
    model = WasteModel()
    t0 = time.time()
    metrics = model.train()
    elapsed = time.time() - t0
    print(f"  [OK] Trained in {elapsed:.2f}s")
    print(f"  [OK] Best Model: {metrics.get('best_model', 'N/A')}")
    print(f"  [OK] R2:   {metrics.get('r2', 'N/A')}")
    print(f"  [OK] RMSE: {metrics.get('rmse', 'N/A')}")
    print(f"  [OK] MAE:  {metrics.get('mae', 'N/A')}")

    filepath = SAVE_DIR / "waste.pkl"
    model.save(str(filepath))
    size_mb = filepath.stat().st_size / (1024 * 1024)
    print(f"  [OK] Saved to {filepath} ({size_mb:.2f} MB)")
    return model, metrics


def train_goal():
    separator("GOAL MODEL -- Training")
    model = GoalModel()
    t0 = time.time()
    metrics = model.train()
    elapsed = time.time() - t0
    print(f"  [OK] Trained in {elapsed:.2f}s")
    print(f"  [OK] Best Success Model: {metrics.get('best_success_model', 'N/A')}")
    print(f"  [OK] Success Accuracy: {metrics.get('success_accuracy', 'N/A')}")
    print(f"  [OK] Success F1:       {metrics.get('success_f1', 'N/A')}")
    print(f"  [OK] Best Risk Model:  {metrics.get('best_risk_model', 'N/A')}")
    print(f"  [OK] Risk Accuracy:    {metrics.get('risk_accuracy', 'N/A')}")

    filepath = SAVE_DIR / "goal.pkl"
    model.save(str(filepath))
    size_mb = filepath.stat().st_size / (1024 * 1024)
    print(f"  [OK] Saved to {filepath} ({size_mb:.2f} MB)")
    return model, metrics


def train_cluster():
    separator("CLUSTER MODEL -- Training")
    model = ClusterModel()
    t0 = time.time()
    metrics = model.train()
    elapsed = time.time() - t0
    print(f"  [OK] Trained in {elapsed:.2f}s")
    print(f"  [OK] Silhouette Score:   {metrics.get('silhouette_score', 'N/A')}")
    print(f"  [OK] Variance Explained: {metrics.get('variance_explained', 'N/A')}")

    filepath = SAVE_DIR / "cluster.pkl"
    model.save(str(filepath))
    size_mb = filepath.stat().st_size / (1024 * 1024)
    print(f"  [OK] Saved to {filepath} ({size_mb:.2f} MB)")
    return model, metrics


# ==================================================================
# VERIFICATION -- Load from .pkl and confirm predictions work
# ==================================================================

def verify_health():
    separator("HEALTH MODEL -- Verification (loading from .pkl)")
    model = HealthModel()
    t0 = time.time()
    model.load(str(SAVE_DIR / "health.pkl"))
    load_time = time.time() - t0
    print(f"  [OK] Loaded in {load_time:.3f}s")

    result = model.predict(DEFAULT_SCORES, emi_burden="light", income_bracket="50k-100k")
    print(f"  [OK] Health Score: {result['health_score']}")
    print(f"  [OK] Trend:        {result['trend_label']}")
    print(f"  [OK] Status:       {result['status_label']}")
    assert 0 <= result['health_score'] <= 100, "Health score out of range!"
    print(f"  [OK] Verification PASSED")
    return load_time


def verify_waste():
    separator("WASTE MODEL -- Verification (loading from .pkl)")
    model = WasteModel()
    t0 = time.time()
    model.load(str(SAVE_DIR / "waste.pkl"))
    load_time = time.time() - t0
    print(f"  [OK] Loaded in {load_time:.3f}s")

    test_sub = {
        "name": "Netflix",
        "price": 649,
        "billing_cycle": "monthly",
        "usage_frequency": "3/week",
        "awareness": "yes I track it",
        "necessity": "fun",
        "has_perks": False,
    }
    result = model.predict_subscription(test_sub)
    print(f"  [OK] Subscription: {result['name']}")
    print(f"  [OK] Waste Score:  {result['waste_score']}")
    print(f"  [OK] Band:         {result['score_band']}")
    assert 0 <= result['waste_score'] <= 100, "Waste score out of range!"
    print(f"  [OK] Verification PASSED")
    return load_time


def verify_goal():
    separator("GOAL MODEL -- Verification (loading from .pkl)")
    model = GoalModel()
    t0 = time.time()
    model.load(str(SAVE_DIR / "goal.pkl"))
    load_time = time.time() - t0
    print(f"  [OK] Loaded in {load_time:.3f}s")

    result = model.predict(
        behavioral_scores=DEFAULT_SCORES,
        goal_description="Trip to Goa",
        goal_target=50000,
        saved_so_far=8000,
        monthly_savings=5000,
        months_remaining=6,
    )
    print(f"  [OK] Goal:       {result['goal_description']}")
    print(f"  [OK] Success %:  {result['success_probability']}")
    print(f"  [OK] On Track:   {result['is_on_track']}")
    print(f"  [OK] Risk:       {result['risk_factor']}")
    assert 0 <= result['success_probability'] <= 100, "Success probability out of range!"
    print(f"  [OK] Verification PASSED")
    return load_time


def verify_cluster():
    separator("CLUSTER MODEL -- Verification (loading from .pkl)")
    model = ClusterModel()
    t0 = time.time()
    model.load(str(SAVE_DIR / "cluster.pkl"))
    load_time = time.time() - t0
    print(f"  [OK] Loaded in {load_time:.3f}s")

    result = model.predict(DEFAULT_SCORES)
    print(f"  [OK] Cluster:     {result['cluster_name']}")
    print(f"  [OK] Cluster ID:  {result['cluster_id']}")
    assert 0 <= result['cluster_id'] <= 3, "Cluster ID out of range!"
    print(f"  [OK] Verification PASSED")
    return load_time


# ==================================================================
# MAIN
# ==================================================================

def main():
    print("\n" + "#" * 60)
    print("  FinSight AI -- Model Training & Serialization Pipeline")
    print("#" * 60)

    total_start = time.time()

    # -- Phase 1: Train & Save --
    all_metrics = {}
    h_model, h_metrics = train_health()
    all_metrics["health"] = h_metrics

    w_model, w_metrics = train_waste()
    all_metrics["waste"] = w_metrics

    g_model, g_metrics = train_goal()
    all_metrics["goal"] = g_metrics

    c_model, c_metrics = train_cluster()
    all_metrics["cluster"] = c_metrics

    train_time = time.time() - total_start

    # -- Phase 2: Verify .pkl loading --
    verify_start = time.time()
    h_load = verify_health()
    w_load = verify_waste()
    g_load = verify_goal()
    c_load = verify_cluster()
    verify_time = time.time() - verify_start

    # -- Save combined metrics report --
    report_path = SAVE_DIR / "training_report.json"
    report = {
        "training_timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "total_training_time_seconds": round(train_time, 2),
        "total_load_time_seconds": round(verify_time, 3),
        "load_times": {
            "health": round(h_load, 3),
            "waste": round(w_load, 3),
            "goal": round(g_load, 3),
            "cluster": round(c_load, 3),
        },
        "model_metrics": all_metrics,
        "pkl_files": {
            name: round(
                (SAVE_DIR / f"{name}.pkl").stat().st_size / (1024 * 1024), 2
            )
            for name in ["health", "waste", "goal", "cluster"]
        },
    }
    with open(report_path, "w") as f:
        json.dump(report, f, indent=2, default=str)

    # -- Final Summary --
    separator("FINAL SUMMARY")
    print(f"  Training time:  {train_time:.2f}s")
    print(f"  Load time:      {verify_time:.3f}s (total for all 4 models)")
    print(f"  Speedup:        ~{train_time / max(verify_time, 0.001):.0f}x faster startup")
    print()
    print(f"  Saved .pkl files:")
    for name in ["health", "waste", "goal", "cluster"]:
        p = SAVE_DIR / f"{name}.pkl"
        mb = p.stat().st_size / (1024 * 1024)
        print(f"    {p.name:20s} -> {mb:.2f} MB")
    print()
    print(f"  Training report: {report_path}")
    print(f"\n  >>> Backend will now load models instantly on startup!")
    print("#" * 60 + "\n")


if __name__ == "__main__":
    main()
