import 'package:flutter/material.dart';

class SignInOrUp extends ChangeNotifier {
  bool _isSignUp = false;

  bool get isSignUp => _isSignUp;

  void toggle() {
    _isSignUp = !_isSignUp;
    notifyListeners();
  }
}
