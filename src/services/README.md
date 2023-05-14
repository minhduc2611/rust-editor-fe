services/

- ApiInstance.ts
Define ApiInstance class as how app API instances look like.

- Instances.ts
Dùng để khai báo các instances, dùng cho toàn app, ví dụ: githubInstance, mainInstance, secondaryInstance, etc 
Vì Mỗi instance có 1 baseURL khác nhau (mỗi baseURL sẽ được gọi với headers khác nhau) 