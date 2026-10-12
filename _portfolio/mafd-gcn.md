---
title: "MAFD-GCN: Multi-view Adaptive Frequency Dynamic Graph Convolutional Networks"
collection: portfolio
permalink: /project/mafd-gcn/
date: 2025-06-30
excerpt: "A time-interaction-aware graph embedding for dynamic graph link prediction that fuses multi-view information (nodes, edges, time, interaction frequency) via a self-designed MIF encoder, plus a frequency-domain DASE module for adaptive representation enhancement. Published at IJCNN 2025 (CCF-C)."
excerpt_zh: "面向动态图链接预测的时间-交互感知图嵌入，通过自主设计的 MIF 编码融合节点、边、时间与交互频率等多视图信息，并在频域构建 DASE 模块自适应增强信息表达。发表于 IJCNN 2025（CCF-C）。"
tech: ["Dynamic Graphs", "Link Prediction", "Graph Neural Networks", "Frequency Domain"]
paperurl: "https://ieeexplore.ieee.org/document/11227301"
---

<div class="lang-en" markdown="1">

**IJCNN 2025 (CCF-C)** — Tinglong Zhou†, Yongxin Su†, Yukuan Sun*<br>
† Equal contribution · * Corresponding author

## Overview

Dynamic graph link prediction is a fundamental task in domains such as social networks, transportation networks, and biological networks. Almost all mainstream methods encode each interaction sequence independently in the time domain, which brings two inherent limitations:

- **Broken causal relations between interactions** — each edge is encoded in isolation, ignoring the correlations hidden in neighboring interaction sequences.
- **Difficulty capturing "time-shift patterns"** — periodic or delayed regularities such as "a user always triggers event B some time after event A" are hard to express effectively in the time domain.

## Method

1. **Temporal-Interaction Aware Embedding.** Innovatively fuses four kinds of view information: node, edge, time, and interaction frequency. I designed the **MIF encoder** (Matrix-based Neighbor Interaction Frequency encoding), which uses matrix operations to efficiently characterize interaction-frequency patterns between nodes, so the model can quickly identify the evolving interaction habits between nodes instead of looking at a single interaction.
2. **DASE: Dual-channel Adaptive Spectral Enhancement.** The frequency-domain core of the method. It first transforms the sequence representation into the frequency domain, then adaptively modulates the real and imaginary parts through dual-channel spectral masking — equivalently letting the model learn which frequencies to keep and which to suppress, thereby adaptively enhancing the frequency-domain representation. Compared with a fixed filter, this is a data-driven spectral filter.
3. **Time-domain prediction module.** Composed of MLPMixer (replacing Transformer, with lower complexity) and a feature aggregation layer, mapping the enhanced multi-view representation to the link prediction output.

## Results

Across six public datasets, MAFD-GCN ranks **first on average** in accuracy under both the Historical and Inductive hard negative sampling settings, while its inference speed is faster than every baseline.

## Links

- [Paper (IEEE Xplore)](https://ieeexplore.ieee.org/document/11227301)

</div>

<div class="lang-zh" markdown="1">

**IJCNN 2025（CCF-C）** —— 周霆龙†，苏甬新†，孙玉宽*<br>
† 共同第一作者 · * 通讯作者

## 研究背景

动态图链路预测是社交网络、交通网络、生物网络等场景的基础任务。当前主流方法几乎都在时域独立编码每条交互序列，这带来两个固有缺陷：

- 割裂了交互之间的因果关系——每条边被单独编码，忽略了邻居交互序列中隐藏的关联；
- 难以捕捉「时间偏移模式」——比如「用户在 A 事件后隔一段时间总会触发 B」这类周期性/延迟性规律，在时域里很难被有效表达。

## 方法

1. **时间-交互感知的图嵌入（Temporal-Interaction Aware Embedding）** 创新性地融合四类视图信息：节点（node）、边（edge）、时间（time）、交互频率（interaction frequency）。其中我自主设计了 MIF 编码（基于矩阵的邻居交互频率编码），用矩阵运算高效地刻画节点之间的交互频次模式，使模型能快速识别节点间正在演化的交互习惯，而不是只看单次交互。
2. **DASE：双通道自适应频谱增强（Dual-channel Adaptive Spectral Enhancement）** 这是方法的频域核心。先将序列表示变换到频域，再通过双通道频谱掩蔽对实部/虚部做自适应调制，等价于让模型自己学出「该保留哪些频率、该抑制哪些频率」，从而自适应增强频域表示。相比固定滤波器，这是一种数据驱动的频谱滤波。
3. **时域预测模块** 由 MLPMixer（替代 Transformer，复杂度更低）与特征聚合层组成，把增强后的多视图表示映射为链路预测结果。

## 实验结果

基于六个公开数据集，在 Historical 与 Inductive 两种复杂负采样设置下，MAFD-GCN 的准确率**平均排名第一**，同时推理速度优于所有 baseline。

## 链接

- [论文（IEEE Xplore）](https://ieeexplore.ieee.org/document/11227301)

</div>
