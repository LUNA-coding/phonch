import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:phonch/routes/routes.dart';
import 'package:phonch/routes/pages.dart';

void main() async {
  // await AppLoader().load();
  runApp(
    GetMaterialApp(
      title: 'Phonch',
      getPages: AppPages.pages,
      // initialRoute: AuthService.to.isAuthenticated ? Routes.HOME : Routes.LOGIN,
      initialRoute: Routes.HOME,
      debugShowCheckedModeBanner: false,
    ),
  );
}
