import 'package:get/get.dart';

import 'package:phonch/pages/home/bindings.dart';
import 'package:phonch/pages/home/page.dart';
import 'package:phonch/routes/routes.dart';

class AppPages {
  static final pages = [
    GetPage(
      name: Routes.HOME,
      page: () => const HomePage(),
      binding: HomePageBinding(),
    ),
  ];
}
