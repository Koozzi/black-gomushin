import 'package:black_gomushin/themes/color_styles.dart';
import 'package:flutter/material.dart';

import 'edit_profile.dart';

class MyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    return SafeArea(
      top: true,
      child: Scaffold(
          backgroundColor: ColorsZoo.background,
          body: Container(
            padding: EdgeInsets.symmetric(horizontal: 24),
            margin: EdgeInsets.only(bottom: 12),
            child: Column(
              children: [
                MyPageTopContent(screenSize: screenSize),
                Divider(
                  thickness: 1,
                ),
                _myPageBodyContent(screenSize),
              ],
            ),
          )),
    );
  }

  Expanded _myPageBodyContent(Size screenSize) {
    return Expanded(
      flex: 4,
      child: Container(
        width: screenSize.width,
        child: DefaultTabController(
          length: 3,
          child: Column(
            children: <Widget>[
              Container(
                child: TabBar(
                    indicatorColor: ColorsZoo.lineColor,
                    labelColor: ColorsZoo.fontColor,
                    labelStyle: MyPageStyle.userInfo
                        .copyWith(fontSize: 16, fontWeight: FontWeight.w600),
                    tabs: [
                      Tab(
                        text: "판매내역",
                      ),
                      Tab(
                        text: "구매 내역",
                      ),
                      Tab(
                        text: "찜리스트",
                      ),
                    ]),
              ),
              Expanded(
                child: Container(
                  child: TabBarView(children: [
                    GridView.builder(
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 1,
                          childAspectRatio: 2.5,
                        ),
                        itemCount: 10,
                        itemBuilder: (context, index) {
                          return Row(
                            children: [
                              ClipRRect(
                                child: Container(
                                  width: screenSize.width * 0.3,
                                  height: screenSize.width * 0.3,
                                  color: ColorsZoo.fontColor,
                                  child: Center(
                                    child: Text(
                                      "image",
                                      style: TextStyle(
                                          color: ColorsZoo.fontColor2),
                                    ),
                                  ),
                                ),
                                borderRadius:
                                    BorderRadius.all(Radius.circular(15)),
                              ),
                              SizedBox(
                                width: 24,
                              ),
                              Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    "제목",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "판매자",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "가격, 사이즈",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "판매중, 예약, 판매완료",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "등록 날짜",
                                    style: MyPageStyle.userInfo,
                                  ),
                                ],
                              )
                            ],
                          );
                        }),
                    GridView.builder(
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 1,
                          childAspectRatio: 2.5,
                        ),
                        itemCount: 10,
                        itemBuilder: (context, index) {
                          return Row(
                            children: [
                              ClipRRect(
                                child: Container(
                                  width: screenSize.width * 0.3,
                                  height: screenSize.width * 0.3,
                                  color: ColorsZoo.fontColor,
                                  child: Center(
                                    child: Text(
                                      "image",
                                      style: TextStyle(
                                          color: ColorsZoo.fontColor2),
                                    ),
                                  ),
                                ),
                                borderRadius:
                                    BorderRadius.all(Radius.circular(15)),
                              ),
                              SizedBox(
                                width: 24,
                              ),
                              Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    "제목",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "판매자",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "가격, 사이즈",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "판매완료",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "등록 날짜",
                                    style: MyPageStyle.userInfo,
                                  ),
                                ],
                              )
                            ],
                          );
                        }),
                    GridView.builder(
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 1,
                          childAspectRatio: 2.5,
                        ),
                        itemCount: 10,
                        itemBuilder: (context, index) {
                          return Row(
                            children: [
                              ClipRRect(
                                child: Container(
                                  width: screenSize.width * 0.3,
                                  height: screenSize.width * 0.3,
                                  color: ColorsZoo.fontColor,
                                  child: Center(
                                    child: Text(
                                      "image",
                                      style: TextStyle(
                                          color: ColorsZoo.fontColor2),
                                    ),
                                  ),
                                ),
                                borderRadius:
                                    BorderRadius.all(Radius.circular(15)),
                              ),
                              SizedBox(
                                width: 24,
                              ),
                              Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    "제목",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "판매자",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "가격, 사이즈",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "판매중, 예약, 판매완료",
                                    style: MyPageStyle.userInfo,
                                  ),
                                  Text(
                                    "등록 날짜",
                                    style: MyPageStyle.userInfo,
                                  ),
                                ],
                              )
                            ],
                          );
                        }),
                  ]),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class MyPageTopContent extends StatelessWidget {
  const MyPageTopContent({
    Key key,
    @required this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      flex: 1,
      child: Container(
        child: Row(
          children: [
            CircleAvatar(
              backgroundColor: ColorsZoo.fontColor,
              radius: screenSize.width * 0.1,
            ),
            SizedBox(
              width: screenSize.width * 0.1,
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "ID",
                  style: MyPageStyle.userInfo,
                ),
                Text(
                  "연락처",
                  style: MyPageStyle.userInfo,
                ),
                InkWell(
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => EditProfile()));
                  },
                  child: Text(
                    "정보 수정",
                    style: MyPageStyle.userInfo,
                  ),
                ),
                Text(
                  "로그아웃",
                  style: MyPageStyle.userInfo,
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}

class MyPageStyle {
  MyPageStyle._();

  static const userInfo = TextStyle(
      fontSize: 14,
      color: ColorsZoo.fontColor,
      letterSpacing: -0.6,
      height: 1.4);
}
