---
outline: deep
---
# TCP的三次握手四次挥手

## 三次握手

### 第一次握手

客户端调用connect()，内核创建tcb（TransmissionControlBlock，传输控制模块），向服务端发送SYN=1报文，序列号Seq=x，之后进入SYN_SENT状态

### 第二次握手

服务端收到客户端的SYN报文，创建半连接tcb，向客户端回复SYN=1 ACK=1报文，序列号Seq=y，确认号ack=x+1，之后进入SYN_RCVD状态

### 第三次握手

客户端收到服务端的SYN+ACK报文，向服务端发送ACK=1报文，序列号Seq=x+1，确认号ack=y+1，之后进入ESTABLISHED状态，服务端收到该报文后将半连接转为全连接，进入ESTABLISHED状态

### 关键作用

1. 双向确认收发能力，交换初始序列号（ISN）
2. 防止历史失效连接请求误建立
3. 第三次握手可携带数据，提高效率

## 四次挥手

### 第一次挥手

主动方发送FIN=1，Seq=u，进入FIN_WAIT_1状态

### 第二次挥手

被动方回复ACK=1，ack=u+1，进入CLOSE_WAIT状态，主动方收到该报文后进入FIN_WAIT_2状态

### 第三次挥手

被动方发送FIN=1，Seq=v，进入LAST_ACK状态

### 第四次挥手

主动方回复ACK=1，ack=v+1，进入TIME_WAIT状态，等待2MSL（2 * Maximum Segment Lifetime，2倍报文最大生存时间）后进入CLOSED状态，被动方收到该报文后直接进入CLOSED状态

### 关键作用

1. TCP 全双工，需分别关闭两个方向的数据通道。 
2. IME_WAIT 确保最后 ACK 可重传并清除网络残留报文。 
3. CLOSE_WAIT 长期存在多因被动方未调用 close() 释放资源。