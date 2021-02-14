import 'package:black_gomushin/themes/color_styles.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  Size size;

  @override
  void didChangeDependencies() {
    size = MediaQuery.of(context).size;
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorsZoo.background,
      appBar: _buildAppBar(),
      body: _buildBody(),
    );
  }

  GridView _buildBody() {
    return GridView.builder(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 0.7,
        ),
        itemCount: 10,
        itemBuilder: (context, index) {
          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 10),
            child: Column(
              children: [
                ClipRRect(
                  child: Container(
                    width: size.width * 0.5,
                    height: size.width * 0.4,
                    color: ColorsZoo.fontColor,
                    child: Center(
                      child: Text(
                        "image",
                        style: TextStyle(color: ColorsZoo.fontColor2),
                      ),
                    ),
                  ),
                  borderRadius: BorderRadius.all(Radius.circular(15)),
                ),
                Text("브랜드"),
                Text("이름"),
                Text("가격"),
              ],
            ),
          );
        });
  }

  AppBar _buildAppBar() {
    return AppBar(
      title: Text(
        "Black Gomushin",
        style: TextStyle(
            color: ColorsZoo.fontColor,
            fontStyle: FontStyle.italic,
            fontSize: 24),
      ),
      centerTitle: false,
      backgroundColor: ColorsZoo.background,
      elevation: 1,
      actions: [
        IconButton(
          splashRadius: 1.0,
          icon: Icon(Icons.add_box_outlined),
          onPressed: () {},
          color: ColorsZoo.bottomNavColor,
        ),
        IconButton(
          splashRadius: 1.0,
          icon: Icon(Icons.tune),
          onPressed: () {},
          color: ColorsZoo.bottomNavColor,
        ),
      ],
    );
  }
}
