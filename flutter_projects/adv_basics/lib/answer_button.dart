import 'package:flutter/material.dart';

class AnswerButton extends StatelessWidget {
  // AnswerButton(this.answerText, this.onTap, {super.key});
  const AnswerButton(
      {super.key, required this.answerText, required this.onTap});

  final String answerText;
  final void Function() onTap;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onTap,
      style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 40),
          backgroundColor: Color.fromARGB(255, 165, 118, 0),
          foregroundColor: Colors.white,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(40))),
      child: Text(answerText, textAlign: TextAlign.center),
    );
  }
}
