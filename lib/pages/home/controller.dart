import 'package:sensors/sensors.dart';
import 'package:get/get.dart';

class HomePageController extends GetxController {
  final RxList accelerometer = [0, 0, 0].obs;

  @override
  void onInit() {
    super.onInit();

    accelerometerEvents.listen((AccelerometerEvent e) {
      accelerometer.value = [e.x, e.y, e.z];
      print(accelerometer);
    });
  }
}
