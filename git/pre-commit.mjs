import boxen from 'boxen';
import fs from 'fs';
// feat=機能開発、fix=修正、docs=ドキュメンテーション、style=見た目だけ（html,cssの修正）、refactor=リファクタリング、perf=パフォーマンス改善、test=テストコード、chore=些細なこと
const prefixes = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore'];
const commitMessage = fs.readFileSync('./.git/COMMIT_EDITMSG', 'utf8').trim();
const isMismatch = !prefixes.some((str) =>
  commitMessage.match(new RegExp(String.raw`^${str}:\s.*`, 'i'))
);

if (isMismatch) {
  const message = boxen('コミットメッセージにPrefixを付けてください', {
    borderStyle: 'double',
    align: 'center',
  });
  console.error(message);
  process.exit(1);
}
process.exit(0);
