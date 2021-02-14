import 'chat/chat.dart';
import 'mypage/my_page.dart';
import 'search/search.dart';
import '../themes/color_styles.dart';
import 'package:flutter/material.dart';

import 'home/home.dart';

class App extends StatefulWidget {
  @override
  _AppState createState() => _AppState();
}

class _AppState extends State<App> {
  int _currentPageIndex;

  @override
  void initState() {
    _currentPageIndex = 0;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorsZoo.background,
      body: _buildBody(),
      bottomNavigationBar: _buildBottomNavigationBar(),
    );
  }

  BottomNavigationBar _buildBottomNavigationBar() {
    return BottomNavigationBar(
      backgroundColor: ColorsZoo.background,
      onTap: (index) {
        setState(() {
          _currentPageIndex = index;
        });
      },
      type: BottomNavigationBarType.fixed,
      currentIndex: _currentPageIndex,
      selectedItemColor: ColorsZoo.bottomNavColor,
      selectedFontSize: 12,
      items: [
        _buildBottomNavigationBarItem(
            "home", Icons.home_filled, Icons.home_outlined),
        _buildBottomNavigationBarItem(
            "search", Icons.search, Icons.search_outlined),
        _buildBottomNavigationBarItem(
            "chat", Icons.question_answer, Icons.question_answer_outlined),
        _buildBottomNavigationBarItem(
            "MyPage", Icons.person, Icons.perm_identity_outlined),
      ],
    );
  }

  BottomNavigationBarItem _buildBottomNavigationBarItem(
      String label, IconData ativeIcon, IconData icon) {
    return BottomNavigationBarItem(
      activeIcon: Icon(ativeIcon),
      label: label,
      icon: Icon(icon),
    );
  }

  Widget _buildBody() {
    switch (_currentPageIndex) {
      case 0:
        return Home();
        break;
      case 1:
        return Search();
        break;
      case 2:
        return Chat();
        break;
      case 3:
        return MyPage();
        break;
    }
    return Container();
  }
}
