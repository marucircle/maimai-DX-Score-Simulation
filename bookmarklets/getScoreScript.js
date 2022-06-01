javascript: (function () {
  const url = 'https://maimai-dx-score-simulation.vercel.app/';
  let score = {
    tap: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    hold: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    slide: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    touch: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
    break: {
      total: 0,
      detail: {
        criticalPerfect: 0,
        highPerfect: 0,
        lowPerfect: 0,
        perfect: 0,
        great: 0,
        good: 0,
        miss: 0,
      },
    },
  };
  const view = document.querySelector('.playlog_notes_detail');

  if (!view) {
    alert('maimaiでらっくすのスコア詳細画面で操作を行ってください。');
  }
  const rows = view.querySelectorAll('tr');
  for (let i = 1; i < rows.length; i++) {
    let note = '';
    switch (i) {
      case 1: {
        note = 'tap';
        break;
      }
      case 2: {
        note = 'hold';
        break;
      }
      case 3: {
        note = 'slide';
        break;
      }
      case 4: {
        note = 'touch';
        break;
      }
      case 5: {
        note = 'break';
        break;
      }
    }
    const detail = rows[i].querySelectorAll('td');
    for (let j = 0; j < detail.length; j++) {
      if (detail[j].innerText.trim() === '') continue;
      score[note].total += parseInt(detail[j].innerText);
      switch (j) {
        case 0: {
          score[note].detail.criticalPerfect += parseInt(detail[j].innerText);
          break;
        }
        case 1: {
          if (note === 'break') score[note].detail.highPerfect += parseInt(detail[j].innerText);
          else score[note].detail.perfect += parseInt(detail[j].innerText);
          break;
        }
        case 2: {
          score[note].detail.great += parseInt(detail[j].innerText);
          break;
        }
        case 3: {
          score[note].detail.good += parseInt(detail[j].innerText);
          break;
        }
        case 4: {
          score[note].detail.miss += parseInt(detail[j].innerText);
          break;
        }
      }
    }
  }

  alert('スコア取得に成功しました！');

  location.href = url + '?scoreQuery=' + encodeURIComponent(JSON.stringify(score));
})();
