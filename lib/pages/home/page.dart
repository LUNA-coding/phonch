import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:phonch/pages/home/controller.dart';

class HomePage extends GetView<HomePageController> {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Obx(
        () => Center(
          child: Container(
            color: HomePageController.to.isPunching.value ? Colors.red : Colors.white,
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              Obx(() => Text(HomePageController.to.accelerometer.toString())),
              Obx(() => Text(HomePageController.to.gyroscope.toString())),
            ]),
          ),
        ),
      ),
    );
  }
}
