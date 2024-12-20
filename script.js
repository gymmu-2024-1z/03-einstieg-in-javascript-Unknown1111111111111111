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
  // Alle Buchstaben sollten gross geschrieben sein
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
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args
  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  let count = 0 // Ab 0 zählen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // Alle kleinen es zählen
      count++
    } else if (currentElement === "E") {
      // Alle grossen es zählen
      count++
    }
  }

  return count // Wiedergebe die anzahl der gezählten es/ Es
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  //Wir filtern die Eingabe so, dass nur noch Buchstaben und Leerzeichen übrig bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      //Grossbuchstabe
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // Kleinbuchstabe
      result.push(currentElement)
    } else if (ascii === 32) {
      // Leerzeichen
      result.push(currentElement)
    }
  }

  //Jetzt kann man noch mehrere Leerzeichen am Stück haben, die muss man noch filtern

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      //Hier sind 2 Leerzeichen hintereinadner , wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  //Jetzt kann man die anzahl der Leerzeichen berechnen
  let count = 0
  for (let i = 0; i < result.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count = count + 1
    }
  }
  //Da es ein Wort mehr wie Leerzeichen gibt, gebe Leerzeichen+1 zurück
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe08(args) {
  // Alle es sollten mit einem 3 ersetzt werden
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // Wenn es ein Element - e hat, dann muss durch 3 ersetzt werden
      // Grosse Es sollten nicht ersetzt werden
      result.push(3)
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe19(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement) // Anzahl der Vervielfachung - hier 2 mal
    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) //Üperfrüfe ob mindestens ein Großbuchstabe vorhanden ist
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args

  const result = []

  let hasSonderzeichen = false //Sagt das es keine Sonderzeichen gibt, um später zu testen, ob es doch Sonderzeichen gibt

  // Schreibe eine Funktion, die testet ob ein Sonderzeichen vorkommt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 33 && ascii <= 47) {
      hasSonderzeichen = true // Wenn ein Sonderzeichen gefunden wird, wird das Sonderzeichen auf true gesetzt
    }
  }

  return hasSonderzeichen //Angabe ob Sonderzeichen vorhanden sind
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args

  const result = []

  //Sollte das Wort 'und' erkennen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "u") {
      if (input[i + 1] === "n") {
        if (input[i + 2] === "d") {
          return true //Gibt true zurück, wenn das Wort erhalten ist
        }
      }
    }
  }

  return false // Gibt false zuück wenn das Wort nicht erhalten ist
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Wenn das Input genau 6 Zeichen enthaltet
  if (input.length === 6) {
    return true //Gebe wahr zurück
  } else {
    return false //Sonst falsch
  }
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Teste, ob die Eingabe ein korrekter RGB Hexcode ist // Ein RGB Hexcode ist eine sechsstellige Zeichenkette, die die Rot-, Grün- und Blauwerte einer Farbe im Hexadezimalsystem angibt.
    if (input[i] === "#") {
      return true // Falls ja, dann - true
    } else {
      return false // Falls nicht, dann - false
    }
  }
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  //Erstelle ein Variable um den ASCII-Code zu speichern.
  let asciiCode = 0

  // Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0)

  //Sollte 'null' zurückgeben wenn mehr wie ein Zeichen gegeben sind
  if (input.length > 1) {
    return null

    //Sollte 'null' zurückgeben wenn keine Eingabe gegeben ist.
  } else if (input.length === 0) {
    return null
  }
  return asciiCode
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
  let count = 0

  // Suche die Postition des dritten "e"s
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
    }
    if (count === 3) {
      return i
    }
  }
  return -1 //Gibt -1 an, wenn dort weniger als 3 e's sind
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      // Wenn man ein Leerzeichen gefunden hat, gib result zurück
      return result.join("")
    }

    result.push(currentElement)
  }
  return result.join("") // Nur bis zum ersten Leerzeichen "lesen" und wiedergeben
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  //Die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste einlesen und den Rest als den zweiten Teil.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalist = []
  const currentlist = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn ein Leerzeichen angetroffen wird, dann speichere die aktuelle Liste in der totaliste
    if (currentElement === " ") {
      totalist.push(currentlist.join(""))
      currentlist.length = 0
    } else {
      currentlist.push(currentElement)
    }
  }
  // Alles was man geschrieben hat, wird in die aktuelle Liste hinzugefügt
  totalist.push(currentlist.join(""))
  return totalist
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  // Verwendung der Aufgabe 17, damit eine Liste entsteht
  const nameAndAge = aufgabe17(input)
  const result = []
  result.push("Sie heissen")
  result.push(nameAndAge[0])
  result.push("und sind")
  result.push(nameAndAge[1])
  result.push("Jahre alt")
  // Resultat wird als Text zurück gegeben
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe20(args) {
  const input = args
  const result = []

  //Prüfe, ob nach jedem "." ein Leerschlag kommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      // Prüfe ob das nächste Zeichen ein Leerzeichen ist
      const nextElement = input[i + 1]
      // Prüfe ob nextElement ein Leerzeichen ist
      if (nextElement === " ") {
        // Nichts unternehmen
      }
      // Nichts unternehmen
      else {
        return false // Kein Leerzeichen, dann false
      }
    }
  }
  return true // Falls doch, dann true wiedergeben
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
      // Alle Zeichen, vor k, sollten durch ein Leerzeichen ersetzt werden.
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
  // Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

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

  result.push(firstElement) // Hange das erste Zeichen am Ende und ganz vorne an
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe25(args) {
  const input = args
  const result = []
  // Lösche das Zeichen, welches in der Mitte des des Textes steht

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === Math.floor(input.length / 2)) {
      // Falls es gleichviele Zeichen hat, dann lösche die mittleren zwei
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []

  const firstElement = input[0]
  const nextElement = input[1]
  // Wenn der ascii wert von nextElement kleiner ist, dann vertausche die Elemente

  if (nextElement.charCodeAt(0) < nextElement.charCodeAt(0)) {
    result.push(nextElement)
    result.push(firstElement)
  } else {
    result.push(firstElement)
    result.push(nextElement)
  }

  for (let i = 2; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  } // Eingaben alphanumerisch sortieren // Alphanumerisch bezeichnet Zeichen, die aus den 26 Buchstaben des Alphabets und den 10 Ziffern (0-9) besteht.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  // Teste, ob eine Eingabe eine Zahl ist.
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 48 && ascii <= 57) {
      return true // Falls ja geben Sie die Summe als Ausgabe aus; sonst false
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const num1 = []
  const num2 = []

  let firstNum = true //Testen Sie, ob in der Eingabe 2 Zahlen von einem Leerzeichen getrennt sind

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 48 && ascii <= 57) {
      if (firstNum === true) {
        num1.push(currentElement)
      } else {
        num2.push(currentElement)
      }
    } else if (currentElement === " ") {
      firstNum = false
    } else {
      return false // Falls true geben Sie die Summe als Ausgabe aus; sonst Fehlermeldung
    }
  }

  return parseInt(num1.join("")) + parseInt(num2.join(""))
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

// Ersetze alle e durch 1000000000 - Eigene Aufgabe
export function aufgabe29(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // Ersetze alle es durch 1000000000
      result.push(1000000000)
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)

// Zähle alle is im Text
export function aufgabe30(args) {
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "i") {
      // Kleine i zählen
      count++
    } else if (currentElement === "I") {
      // Grosse I zählen
      count++
    }
  }

  return count
}
linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function aufgabe31(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "t") {
      // alle ts löschen
    } else if (currentElement === "T") {
      // auch gross T ignorieren
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)

export function aufgabe32(args) {
  const input = args
  // Erstelle eine Variable, um die Position des ersten i s zu speichern
  let position = -1
  // -1 ist davor

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "i") {
      position = i
      // Wenn ein i gefunden wurde, gib Position zurück ( Funktion wird beendet)
      return position
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe32]", aufgabe32)

export function aufgabe33(args) {
  const input = args
  const result = []
  let foundk = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "t") {
      // Alle Zeichen bis zum ersten klein t mit % ersetzten
      foundk = true
    }

    if (foundk === false) {
      result.push("%") // ersetzte durch %
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe33]", aufgabe33)

export function aufgabe34(args) {
  // Jedes Zeichen sollte versiebenfacht werden
  const input = args
  const result = []

  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe34]", aufgabe34)

export function aufgabe35(args) {
  const input = args
  const result = []
  let foundk = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "i") {
      //Alle zeichen bis zum ersten i mit Apple ersetzten
      foundk = true
    }

    if (foundk === false) {
      result.push("Apple")
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe35]", aufgabe35)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um,
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}
linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)

export function Selectionsort(args) {
  const input = args.split("")
  const result = []
  let n = input.length
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position holds the minimum element
    let min_idx = i

    // Iterate through the unsorted portion to find the actual minimum
    for (let j = i + 1; j < n; j++) {
      if (input[j] < input[min_idx]) {
        // Update min_idx if a smaller element is found
        min_idx = j
      }
    }

    // Move minimum element to its correct position
    let temp = input[i]
    input[i] = input[min_idx]
    input[min_idx] = temp
  }
  return input
}
linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)

export function Countingsort(args) {
  const input = args
  const Lookup = new Array(128) // Erstelle (zähle durch) eine Liste mit den 128 Werten der ASCII- Liste
  Lookup.fill(0) // Anfang der Zählung bei 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) // Wir wiederholen das a soviel, wie wir es gezählt haben.
    Lookup[ascii] += 1
  }

  const result = []

  for (let i = 0; i < Lookup.length; i++) {
    const value = Lookup[i]
    for (let j = 0; j < value; j++) {
      const character = String.fromCharCode(i)
      result.push(character) // Wiedergeben
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=Countingsort]", Countingsort)
