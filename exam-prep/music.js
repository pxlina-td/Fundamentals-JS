function organizePianoPieces(input) {
        let n = Number(input.shift());
        let pieces = {};
      
        for (let i = 0; i < n; i++) {
          let [piece, composer, key] = input.shift().split('|');
          pieces[piece] = { composer, key };
        }

        for (let line of input) {
          if (line === 'Stop') {
            break;
          }

          let [command, piece, composer, key] = line.split('|');
      
          switch (command) {
            case 'Add':
              if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
              } else {
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
              }
              break;
            case 'Remove':
              if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
              } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
              }
              break;
            case 'ChangeKey':
              if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
              } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
              }
              break;
          }
        }

        for (let piece in pieces) {
          console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
        }
      }