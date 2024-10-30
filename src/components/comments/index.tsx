import React from "react";
import "./styles.css";
import Container from "../container";
import Image from "next/image";

import author1 from "@/images/author1.jpg";
import author2 from "@/images/author2.jpg";
import author3 from "@/images/author3.jpg";
import author4 from "@/images/author4.jpg";
import author5 from "@/images/author5.jpg";
import author6 from "@/images/author6.jpg";

const Comments = () => {
  return (
    <Container className="comments-section flex-col">
      <h2 className="max-lg:text-center text-[30px] font-bold">
        Phản hồi khách hàng
      </h2>
      <div className="comments-section-wrapper">
        <div className="comments-section-header">
          <p>254 Comments</p>
        </div>
        <div className="comments-section-body">
          <div className="comments-wrapper">
            <div className="comments-container">
              <div className="comment">
                <Image
                  className="comment-profile-pic object-cover"
                  src={author1}
                  loading="lazy"
                  height={56}
                  width={56}
                  title="Profile picture"
                  alt="Profile picture of Ligia dos Santos"
                />
                <div className="comment-body">
                  <div className="comment-header" title="Facebook's comment">
                    <p className="comment-author">Hà Linh</p>
                    <p className="comment-text">
                      Rất tốt, đã trải qua giai đoạn đầu setup gian hàng. 😍
                    </p>
                  </div>
                  <div className="comment-footer">
                    <u>11 d</u> &nbsp; <u>Like</u> &nbsp; <u>Reply</u> &nbsp;{" "}
                    <span className="comment-interactions">
                      <u>3</u>
                      <span className="comment-emojis">
                        <span className="love" />
                        <span className="like" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="comments-container">
                <div className="comment">
                  <Image
                    className="comment-profile-pic object-cover"
                    src={author2}
                    loading="lazy"
                    height={56}
                    width={56}
                    title="Profile picture"
                    alt="Profile picture of Marta Ribeiro"
                  />
                  <div className="comment-body">
                    <div className="comment-header" title="Facebook's comment">
                      <p className="comment-author">Anh Quân</p>
                      <p className="comment-text">
                        Quán tôi cũng mới sử dụng dịch vụ của bên này, ok lắm.
                        Làm nhanh app giúp tôi tầm 4-5 ngày là xong rồi, làm
                        xong còn tư vấn giúp tôi để giữ khách tại quán bằng cái
                        qr code nghe hay phết. quán giờ đông khách lắm, khách
                        quen thì ăn lại nhiều khách lạ cũng nhiều lên. 😅
                      </p>
                    </div>
                    <div className="comment-footer">
                      <u>8 d</u> &nbsp; <u>Like</u> &nbsp; <u>Reply</u> &nbsp;{" "}
                      <span className="comment-interactions">
                        <u>4</u>
                        <span className="comment-emojis">
                          <span className="haha" />
                          <span className="love" />
                          <span className="like" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments-container">
                <div className="comment">
                  <Image
                    className="comment-profile-pic object-cover"
                    src={author3}
                    loading="lazy"
                    height={56}
                    width={56}
                    title="Profile picture"
                    alt="Profile picture of Marta Ribeiro"
                  />
                  <div className="comment-body">
                    <div className="comment-header" title="Facebook's comment">
                      <p className="comment-author">Nam Nguyễn</p>
                      <p className="comment-text">
                        Không có gì phải chê trách nữa, tôi rất hài lòng, các
                        bạn tư vấn nhiệt tình lắm, tư vấn cả làm app cả
                        marketing offline tại quán, làm rất chuyên nghiệp, ngoài
                        làm app ra tôi cũng hợp tác để bên này làm mảng truyền
                        thông và marketing cho quán của tôi 3 tháng tới rồi. 😅
                      </p>
                    </div>
                    <div className="comment-footer">
                      <u>8 d</u> &nbsp; <u>Like</u> &nbsp; <u>Reply</u> &nbsp;{" "}
                      <span className="comment-interactions">
                        <u>4</u>
                        <span className="comment-emojis">
                          <span className="haha" />
                          <span className="love" />
                          <span className="like" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments-container">
              <div className="comment">
                <Image
                  className="comment-profile-pic object-cover"
                  src={author4}
                  loading="lazy"
                  height={56}
                  width={56}
                  title="Profile picture"
                  alt="Profile picture do Eder Dionízio"
                />
                <div className="comment-body">
                  <div className="comment-header" title="Facebook's comment">
                    <p className="comment-author">Lê Nhi</p>
                    <p className="comment-text">
                      Mong được hợp tác với công ty lâu dài, thật sự bên bạn làm
                      marketing cho quán rất hiệu quả!
                    </p>
                  </div>
                  <div className="comment-footer">
                    <u>14 d</u> &nbsp; <u>Like</u> &nbsp; <u>Reply</u> &nbsp;{" "}
                    <span className="comment-interactions">
                      <u>8</u>
                      <span className="comment-emojis">
                        <span className="like" />
                        <span className="love" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments-container">
              <div className="comment">
                <Image
                  className="comment-profile-pic object-cover"
                  src={author5}
                  loading="lazy"
                  height={56}
                  width={56}
                  title="Profile picture"
                  alt="Profile picture do Eder Dionízio"
                />
                <div className="comment-body">
                  <div className="comment-header" title="Facebook's comment">
                    <p className="comment-author">Hoàng Anh</p>
                    <p className="comment-text">
                      Cảm ơn văn phòng đã hỗ trợ tôi, quán giờ đông khách lắm,
                      đang tính mở chi nhánh mới đây, chứ khách đến giờ cao điểm
                      là ko có bàn để ngồi, tiếc khách quá!
                    </p>
                  </div>
                  <div className="comment-footer">
                    <u>14 d</u> &nbsp; <u>Like</u> &nbsp; <u>Reply</u> &nbsp;{" "}
                    <span className="comment-interactions">
                      <u>4</u>
                      <span className="comment-emojis">
                        <span className="like" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comments-container">
              <div className="comment">
                <Image
                  className="comment-profile-pic object-cover"
                  src={author6}
                  loading="lazy"
                  height={56}
                  width={56}
                  title="Profile picture"
                  alt="Profile picture do Eder Dionízio"
                />
                <div className="comment-body">
                  <div className="comment-header" title="Facebook's comment">
                    <p className="comment-author">Hoàng Vy</p>
                    <p className="comment-text">Tuyệt với hơn kỳ vọng.</p>
                  </div>
                  <div className="comment-footer">
                    <u>14 d</u> &nbsp; <u>Like</u> &nbsp; <u>Reply</u> &nbsp;{" "}
                    <span className="comment-interactions">
                      <u>2</u>
                      <span className="comment-emojis">
                        <span className="like" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Comments;
