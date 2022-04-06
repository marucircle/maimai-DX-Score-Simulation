# maimai-DX-Score-Simulation

## スコア計算

### 旧筐体

- 通常ノーツ

|  ノーツ名    |  Critical Perfect  |  Perfect  |  Great  |  Good  |  miss  |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Tap | 500 | 500 | 500 * 0.8 | 500 * 0.5 | 0 |
| Hold | 1000 | 1000 | 1000 * 0.8 | 1000 * 0.5 | 0 |
| Slide | 1500 | 1500 | 1500 * 0.8 | 1500 * 0.5 | 0 |

- BREAK（本来はGREATも細かいが、今回は全て2000点として扱う）

|   Critical Perfect   |  Perfect (High)  |  Perfect (Low)  |  Great  |  Good  |  miss  |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 2600 | 2550 | 2500 | 2000 | 1000 | 0 |

### 新筐体

- 通常ノーツ

|  ノーツ名    |  Critical Perfect  |  Perfect  |  Great  |  Good  |  miss  |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Tap | 1 | 1 | 1 * 0.8 | 1 * 0.5 | 0 |
| Touch | 1 | 1 | 1 * 0.8 | 1 * 0.5 | 0 |
| Hold | 2 | 2 | 2 * 0.8 | 2 * 0.5 | 0 |
| Slide | 3 | 3 | 3 * 0.8 | 3 * 0.5 | 0 |

- BREAK


|   Critical Perfect　|  Perfect (High)  |  Perfect (Low)  |  Great  |  Good  |  miss  |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 5 | 5 | 5 | 4 | 2 | 0 |

### BREAKボーナス


### 計算方法
基本点　＝　評価値合計 / 各ノーツの評点合計

