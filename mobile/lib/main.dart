import 'pages/auth/auth_page.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'services/sign_in_or_up.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (context) => SignInOrUp()),
        ],
        child: AuthPage(),
      ),
    );
  }
}
