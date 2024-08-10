import 'package:sensors/sensors.dart';
import 'package:get/get.dart';

class HomePageController extends GetxController {
  static HomePageController get to => Get.find<HomePageController>();

  final RxList accelerometer = <double>[0, 0, 0].obs;
  final RxList gyroscope = <double>[0, 0, 0].obs;
  final RxBool isPunching = false.obs;

  @override
  void onInit() {
    super.onInit();

    accelerometerEvents.listen((AccelerometerEvent e) {
      accelerometer.value = <double>[e.x, e.y, e.z];
      if (e.x > 60 && e.z < -5) {
        isPunching.value = true;
      }

      if (e.x <= 10) {
        isPunching.value = false;
      }
    });

    gyroscopeEvents.listen((GyroscopeEvent e) {
      gyroscope.value = <double>[e.x, e.y, e.z];
      print(gyroscope.value);
    });
  }
}
