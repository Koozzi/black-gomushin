import 'package:black_gomushin/themes/color_styles.dart';
import 'package:flutter/material.dart';

class EditProfile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: ColorsZoo.background,
      appBar: AppBar(
        centerTitle: false,
        iconTheme: IconThemeData(color: ColorsZoo.lineColor),
        title: Text(
          "프로필 편집",
          style: EditMyPageStyle.editText.copyWith(fontSize: 20),
          textAlign: TextAlign.end,
        ),
        backgroundColor: ColorsZoo.background,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            CircleAvatar(
              backgroundColor: ColorsZoo.fontColor,
              radius: screenSize.width * 0.15,
            ),
            Text(
              "사진 변경",
              style: EditMyPageStyle.editText,
            ),
            Divider(
              height: screenSize.height * 0.05,
              thickness: 1,
            ),
            Row(
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "프로필 정보",
                      style: EditMyPageStyle.editText
                          .copyWith(fontSize: 18, fontWeight: FontWeight.w700),
                    ),
                    Text(
                      "ID",
                      style: EditMyPageStyle.editText,
                    ),
                    Text(
                      "비밀번호",
                      style: EditMyPageStyle.editText,
                    ),
                    Text(
                      "연락처",
                      style: EditMyPageStyle.editText,
                    ),
                  ],
                ),
                Spacer()
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class EditMyPageStyle {
  EditMyPageStyle._();

  static const editText = TextStyle(
      fontSize: 16,
      color: ColorsZoo.fontColor,
      letterSpacing: -0.6,
      height: 1.4);
}
