import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:phonch/pages/home/controller.dart';

class HomePage extends GetView<HomePageController> {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home Page'),
      ),
      body: const Center(child: Text("TLQKF")),
    );
  }
}
