const fs = require('fs');

const wrtieStream = fs.createWriteStream('./writeme2.txt');
wrtieStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

wrtieStream.write('이 글을 씁니다.\n');
wrtieStream.write('한 번 더 씁니다.');
wrtieStream.end(); // 이 함수는 'finish' 이벤트 발생
