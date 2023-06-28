<h1>:policeman: Work Processes </h1>


#### WP1: tạo nhánh theo cú pháp: ticket + tên nhánh
```
feature/FE-1-add-bla-bla
fixbug/FE-2-fix-bla-bla
improvement/FE-3-improve-bla-bla
```

#### WP2: commit theo cú pháp: ticket + commit message
- message ghi rõ mình làm gì 
```git
[FE-1] add blabla
[FE-1] fix bla bla 
[FE-1] delete bla bla
```
- lí do nên làm v là vì: lúc commit, mỗi dòng code sẽ có tên author + commit message như hình (git lens)
càng dev + maintain về sau thì người maintain sẽ thấy đoạn code đó thuộc ticket nào cũng như làm gì.

#### WP3: code review
- review code theo code standard của team, tham khảo .work/code-standard.md