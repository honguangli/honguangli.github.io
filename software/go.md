---
outline: deep
editLink: false
---
# Go

## 安装教程

1. 下载  
   地址1：[https://golang.google.cn/dl/](https://golang.google.cn/dl/)

2. 配置

   Go安装路径`xxx\Go` 创建文件夹`xxx\Go-Data\GoPath`、`xxx\Go-Data\GoCache`

    1. 配置系统环境变量
        - `GOROOT`:`xxx\Go`
        - `GOENV`:`xxx\Go-Data\go.env`
        - `Path`追加`%GOROOT%\bin`

    2. 配置Go环境

   以下配置会保存到`GOENV`指向的文件
    ```bash 
    go env -w GOPATH=xxx\Go-Data\GoPath
    go env -w GOCACHE=xxx\Go-Data\GoCache
    go env -w GOPROXY=https://goproxy.cn 
    ```

3. 查看go版本
    ```bash
    go version
    ```

4. 查看go配置
    ```bash
    go env
    ```