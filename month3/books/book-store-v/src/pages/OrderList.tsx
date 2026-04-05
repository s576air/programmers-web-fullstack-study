import styled from "styled-components";
import { useOrders } from "../hooks/useOrders";
import Title from "../components/common/title";
import { formatNumber } from "../utils/format";
import Button from "../components/common/Button";
import React from "react";

function OrderList() {
  const { orders, selectedItemId, selectOrderItem } = useOrders();

  return (
    <>
      <Title size="large">주문 내역</Title>
      <OrderListStyle>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>주문일자</th>
              <th>주소</th>
              <th>수령인</th>
              <th>전화번호</th>
              <th>대표상품명</th>
              <th>수량</th>
              <th>금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.address}</td>
                  <td>{order.receiver}</td>
                  <td>{order.contact}</td>
                  <td>{order.bookTitle}</td>
                  <td>{order.totalQuantity} 권</td>
                  <td>{formatNumber(order.totalPrice)} 원</td>
                  <td>
                    <Button size="small" scheme="normal" onClick={() => selectOrderItem(order.id)}>
                      자세히
                    </Button>
                  </td>
                </tr>
                {selectedItemId === order.id && (
                  <tr>
                    <td></td>
                    <td colSpan={8}>
                      <ul>
                        {order?.detail &&
                          order.detail.map((item) => (
                          <li key={item.bookId}>
                            <div>
                              <span>{item.bookId}</span>
                              <span>{item.author}</span>
                              <span>{formatNumber(item.price)} 원</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </OrderListStyle>
    </>
  );
}

const OrderListStyle = styled.div`
`;

export default OrderList;