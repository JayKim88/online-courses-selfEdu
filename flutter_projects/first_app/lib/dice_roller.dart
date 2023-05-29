import 'dart:math';

import 'package:flutter/material.dart';

final randomizer = Random();

// For state-changeable class, use StatefulWidget.
class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    return _DiceRollerState();
  }
}

// starting a name with underscore means it's used privately.
class _DiceRollerState extends State<DiceRoller> {
  var currentDiceRoll = 2;

  void rollDice() {
    // rebuild by state-change. re-execute build function.
    setState(() {
      // in case of using Random(), new Random Object is created and stored in device all the time.
      // it's a redundant object creation and deletion of memory.
      currentDiceRoll = randomizer.nextInt(6) + 1;
    });
  }

  @override
  Widget build(context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      // mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Image.asset(
          'assets/images/dice-$currentDiceRoll.png',
          width: 200,
        ),
        const SizedBox(
          height: 20,
        ),
        TextButton(
          onPressed: rollDice,
          style: TextButton.styleFrom(
              // padding: const EdgeInsets.only(top: 20),
              foregroundColor: Colors.white,
              textStyle: const TextStyle(fontSize: 28)),
          child: const Text('Roll Dice'),
        )
      ],
    );
  }
}
