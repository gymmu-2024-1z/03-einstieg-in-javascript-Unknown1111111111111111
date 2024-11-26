import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatliste
  // Läuft Zeichen für Zeichen über den ganzen Text

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const upperCaseLetter = currentElement.toUpperCase()
    // Hänge das aktuelle Zeichen doppelt an
    result.push(upperCaseLetter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // Kleine es zählen
      count++
    } else if (currentElement === "E") {
      // Grosse es zählen
      count++
    }
  }

  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      // Alle Wörter zählen
      count++
    } else if (currentElement === " ") {
      // Alle Wörter zählen
      count++
    }
  }

  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe08(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // Ersetze alle e durch 3
      result.push(3)
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe05(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()
    if (currentElement === "." || currentElement === " ") {
    } else if (currentElement === upperCaseLetter) {
      // Alle Grossbuchstaben zählen, falls mehr als 1, dann wahr
      count++
    }
  }

  if (count > 0) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe19(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe06(args) {
  const input = args
  const result = []
  let istSonderzeichen = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()

    const lowerCase = upperCaseLetter.toLowerCase()
    if (lowerCase === upperCaseLetter) {
      istSonderzeichen = true
    }
  }
  return istSonderzeichen
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  let istund = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u" || currentElement === "U") {
      const nextElement = input[i + 1]
      if (nextElement === "n") {
        const lastElement = input[i + 2]
        if (lastElement === "d") {
          istund = true
        }
      }
    }
  }
  return istund
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Wenn das Input genau 6 Zeichen enthaltet gebe wahr zurück, sonst falsch
  if (input.length === 6) {
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Teste, ob die Eingabe ein korrekter RGB Hexcode ist
    if (input[i] === "#") {
      return true
    } else {
      return false
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // speichere mir den ASCII wert vom aktuellen zeichen
    const ascii = currentElement.charCodeAt(0)
    // Gib diesen ASCII wert zurück und breche die Funktion ab
    return ascii
  }
  return null
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  // Erstelle eine Variable, um die Position des ersten e s zu speichern
  let position = -1
  // -1 ist davor

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      position = i
      // Wenn ein e gefunden wurde, gib Position zurück ( Funktion wird beendet)
      return position
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  // Erstelle eine Variable, um die Position des letzten e s zu speichern
  let position = -1
  // -1 ist davor

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      position = i
      // Wenn ein e gefunden wurde, gib Position zurück ( Funktion wird beendet)
    }
  }
  return position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      count = count + 1
      // Wenn Count genau 3 ist, dann speichere die Position

      if (count === 3) {
        return i
      }
    }
  }
  return -1
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      // wenn man ein Leerzeichen gefunden hat, gib result zurück
      return result.join("")
    }

    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result1 = []
  const result2 = []
  let dollarfound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein Dollar findest, dann setze Dollarfound auf wahr
    if (currentElement === "$") {
      dollarfound = true
      continue
    }
    // Solange Dollerfound falsch ist, hänge an Result1
    if (dollarfound === false) {
      result1.push(currentElement)
    } else {
      result2.push(currentElement)
    }
  }

  return [result1.join(""), result2.join("")]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe20(args) {
  const input = args
  const result = []

  //Prüfe, ob nach jedem "." ein Leerschlag kommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      // Prüfe ob das nächste Zeichen ein Leerzeichen ist
      const nextElement = input[i + 1]
      // prüfe ob nextElement ein Leerzeichen ist
      if (nextElement === " ") {
        // Nichts unternehmen
      }
      // Nichts unternehmen
      else {
        return false
      }
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  // Kehr die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  let foundk = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "k") {
      foundk = true
    }

    if (foundk === false) {
      result.push("_")
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe24(args) {
  const input = args
  const result = []
  // Speicher das erste Zeichen
  const firstElement = input[0]
  // Speicher das letzte Zeichen
  const lastElement = input[input.length - 1]

  result.push(lastElement)

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)

  return result.join("")
}
linkupExerciseHandler('[data-click="aufgabe24]', aufgabe24)

export function aufgabe23(args) {
  const input = args
  const result = [] // Leere Liste, in der wir das Resultat anhängen
  const firstElement = input[0]

  // Hänge firstelement an die Liste
  result.push(firstElement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  result.push(firstElement) // Hange das erste Zeichen am Ende an
  return result.join("")
}

linkupExerciseHandler('[data-click="aufgabe23]', aufgabe23)
