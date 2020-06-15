git init
git add *
git commit -m ''
//配置本机与  github   连接  用ssh 密钥
//第一步：生成密钥  ssh-ken -t rsa -C '1833382523@qq.com'
//创建密钥文件， 将生成的密钥写入到文件中

//第二步：查看密钥  cat ~/.ssh/id_rsa.pub
- xxx.pub 文件表示的是密钥文件【】


//第三步：来到github [new ssh]  将ssh密钥复制进去，建立电脑与github连接

如何将本地仓库添加到 远程仓库
- 第一步：创建一个远程仓库  创建一个本地仓库（已创建就忽略）
- 第二步：建立本地仓库与远程仓库连接
    git remote add origin https://github.com/cc-name44/cc.git
    语法总结 git remote add origin 远程仓库地址
- 第三步：将本地仓库添加到远程仓库  git push -u origin master
    - git push 添加
    - -u       表示谁添加的
    - origin   表示组织
    - master   主支

如果说更改需要添加到远程
  git add------->    git commit------->   git push

  注意：只有第一次  才需要建立  电脑与github 连接
        只有是一个新的仓库 才需要建立 本地仓库与远程仓库的连接

方式二：直接使用github 工具直接上传

### github
 1.如何使用 github 进行项目版本管理
 2.如何使用 github  自学  找到优秀的开源项目
 3.如何使用 github 进行合作开发