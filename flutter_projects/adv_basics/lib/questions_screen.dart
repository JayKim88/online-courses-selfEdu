import 'package:flutter/material.dart';

class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({super.key});
  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}

class _QuestionsScreenState extends State<QuestionsScreen> {
  @override
  Widget build(context) {
    return SizedBox(
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text('question!'),
          const SizedBox(
            height: 30,
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer1'),
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer2'),
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer3'),
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Answer4'),
          ),
        ],
      ),
    );
  }
}
