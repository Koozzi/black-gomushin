import 'package:black_gomushin/services/sign_in_or_up.dart';
import 'package:black_gomushin/themes/color_styles.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class AuthPage extends StatelessWidget {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: ColorsZoo.background,
      body: SafeArea(
        child: Column(
          children: [
            _name(screenSize),
            _inputForm(screenSize),
            _authButton(screenSize),
            _signChanger(screenSize),
          ],
        ),
      ),
    );
  }

  Widget _signChanger(Size screenSize) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: screenSize.height * 0.15),
      child: Consumer<SignInOrUp>(
        builder: (context, signInOrUp, child) => GestureDetector(
          onTap: () => signInOrUp.toggle(),
          child: signInOrUp.isSignUp
              ? Text.rich(
                  TextSpan(
                    text: '이미 회원이신가요?',
                    style: TextStyle(
                      color: ColorsZoo.fontColor,
                    ),
                    children: <TextSpan>[
                      TextSpan(
                          text: ' 여기에서 로그인',
                          style: TextStyle(
                              color: ColorsZoo.fontColor,
                              fontWeight: FontWeight.bold)),
                    ],
                  ),
                )
              : Text.rich(
                  TextSpan(
                    text: '아직 가입하지 않으셨나요?',
                    style: TextStyle(
                      color: ColorsZoo.fontColor,
                    ),
                    children: <TextSpan>[
                      TextSpan(
                          text: ' 이메일로 가입',
                          style: TextStyle(
                              color: ColorsZoo.fontColor,
                              fontWeight: FontWeight.bold)),
                    ],
                  ),
                ),
        ),
      ),
    );
  }

  Widget _authButton(Size screenSize) {
    return Consumer<SignInOrUp>(
        builder: (context, signInOrUp, child) => Container(
            color: ColorsZoo.lineColor,
            width: screenSize.width * 0.9,
            height: screenSize.height * 0.05,
            margin: EdgeInsets.only(top: screenSize.height * 0.1),
            child: Center(
              child: signInOrUp.isSignUp
                  ? Text(
                      "회원가입",
                      // joinOrLogin.isJoin ? "Sign Up" : "Sign In",
                      style: TextStyle(
                          color: ColorsZoo.fontColor2,
                          fontSize: 16,
                          fontWeight: FontWeight.bold),
                    )
                  : Text(
                      "로그인",
                      // joinOrLogin.isJoin ? "Sign Up" : "Sign In",
                      style: TextStyle(
                          color: ColorsZoo.fontColor2,
                          fontSize: 16,
                          fontWeight: FontWeight.bold),
                    ),
            )));
  }

  Widget _inputForm(Size screenSize) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: screenSize.width * 0.05),
      child: Column(
        children: [
          TextFormField(
            style: TextStyle(color: ColorsZoo.fontColor),
            controller: _emailController,
            decoration: InputDecoration(
                enabledBorder: UnderlineInputBorder(
                  borderSide: BorderSide(color: ColorsZoo.lineColor),
                ),
                labelText: "이메일",
                labelStyle:
                    TextStyle(color: ColorsZoo.fontColor, fontSize: 12)),
            validator: (String value) {
              if (value.isEmpty) {
                return "올바른 이메일을 입력해주세요.";
              }
              return null;
            },
          ),
          TextFormField(
            obscureText: true,
            style: TextStyle(color: ColorsZoo.fontColor),
            controller: _passwordController,
            decoration: InputDecoration(
                enabledBorder: UnderlineInputBorder(
                  borderSide: BorderSide(color: ColorsZoo.lineColor),
                ),
                labelText: "비밀번호",
                labelStyle:
                    TextStyle(color: ColorsZoo.fontColor, fontSize: 12)),
            validator: (String value) {
              if (value.isEmpty) {
                return "올바른 비밀번호를 입력해주세요.";
              }
              return null;
            },
          ),
          Consumer<SignInOrUp>(
              builder: (context, signInOrUp, child) => Container(
                    alignment: Alignment.centerRight,
                    margin: EdgeInsets.only(
                      top: 16,
                    ),
                    child: Opacity(
                      opacity: signInOrUp.isSignUp ? 0 : 1,
                      child: Text(
                        "비밀번호 찾기",
                        style:
                            TextStyle(fontSize: 12, color: ColorsZoo.fontColor),
                      ),
                    ),
                  )),
        ],
      ),
    );
  }

  Widget _name(Size screenSize) {
    return Center(
      child: Container(
        margin: EdgeInsets.symmetric(
          vertical: screenSize.height * 0.1,
        ),
        child: Text(
          "Black Gomushin",
          style: TextStyle(
              color: ColorsZoo.fontColor,
              fontSize: 24,
              fontWeight: FontWeight.bold,
              fontStyle: FontStyle.italic),
        ),
      ),
    );
  }
}
