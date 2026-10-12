---
title: "RoutePilot"
collection: portfolio
permalink: /project/routepilot/
date: 2026-10-12
excerpt: "A plug-and-play framework built on LangGraph for multi-agent auto-optimization and dynamic model routing in enterprise forecasting."
excerpt_zh: "基于 LangGraph 的通用 Multi-Agent 自动优化与动态模型路由框架，面向企业预测任务实现实验自主迭代与推理成本优化。"
tech: ["LangGraph", "Multi-Agent", "LLM Routing", "Python"]
featured: true
metrics:
  - value: "↓53.4%"
    label: "LLM inference cost"
    label_zh: "LLM 推理成本"
  - value: "↓23.5%"
    label: "P95 latency"
    label_zh: "P95 延迟"
githuburl: "https://github.com/syx7777/RoutePilot"
---

<div class="lang-en" markdown="1">

## Background

Enterprise forecasting pipelines still depend on manual, trial-and-error experimentation, multi-agent workflows tend to lean on expensive frontier models, and reuse across projects is hard. RoutePilot is a plug-and-play auto-optimization framework that lets forecasting experiments iterate on their own while cutting inference cost.

## What I built

1. **General-purpose agent framework.** A multi-agent collaboration framework on LangGraph that automatically detects a project's entry point and data format and generates the YAML configuration, so the same core code is reused across projects with zero modification.
2. **Adaptive model routing algorithm.** A step-level dynamic routing policy that combines task difficulty, each model's historical performance, and budget constraints to select a model at the appropriate capability tier, jointly optimizing reasoning quality, cost, and latency.
3. **Feedback-driven closed-loop optimization.** An automatic iteration chain — error diagnosis → experiment planning → code generation → execution and evaluation → policy update — with metric-driven adoption and rollback of each proposed change, plus isolated execution and reproducibility checks to keep the optimization reliable.

## Results

In a controlled model-routing comparison against an always-strongest-model policy, the dynamic router matched forecasting accuracy while reducing LLM inference cost by **53.4%** and P95 latency by **23.5%**.

## Links

[Code](https://github.com/syx7777/RoutePilot)

</div>

<div class="lang-zh" markdown="1">

## 项目背景

针对企业预测任务中人工实验迭代成本高、多 Agent 工作流依赖高成本模型、跨项目复用困难等问题，设计即插即用的自动优化框架，实现预测实验自主迭代与推理成本优化。

## 主要工作

1. **通用 Agent 框架设计**：基于 LangGraph 构建多 Agent 协同框架，通过自动识别项目运行入口、数据格式并生成 YAML 配置，实现核心代码零修改的跨项目复用能力。
2. **自适应模型路由算法**：设计 Step 级动态模型路由策略，结合任务难度、模型历史表现与预算约束，自适应选择不同能力档位的模型，实现推理质量、成本与延迟的联合优化。
3. **反馈驱动的闭环优化**：构建「误差诊断 → 实验规划 → 代码生成 → 执行评测 → 策略更新」的自动迭代链路，引入指标反馈驱动的方案采纳与回滚机制，通过隔离执行和可复现性校验保障优化可靠性。

## 项目成果

在模型路由对照实验中，相比全强模型策略，动态路由机制在预测精度接近的前提下，LLM 推理成本降低 **53.4%**，P95 延迟降低 **23.5%**。

## 链接

[代码仓库](https://github.com/syx7777/RoutePilot)

</div>
