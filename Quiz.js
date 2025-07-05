document.getElementById('quizForm').addEventListener('submit', function(e) {
      e.preventDefault(); // フォームの実際の送信を止める

      // 選択されたラジオボタンを取得
      const selected = document.querySelector('input[name="model"]:checked');
      if (!selected) {
        alert('まず選択肢を選んでください');
        return;
      }

      // 正解は value="prototyping"
      if (selected.value === 'prototyping') {
        alert('正解!');
      } else {
        alert('不正解!');
      }
    });