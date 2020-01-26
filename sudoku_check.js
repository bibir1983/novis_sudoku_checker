
const Sudoku = require('./sudo.js');


// Contoh soal Board sudoku. Angka 0 = cell kosong
var board_array = [	0,0,0,0,0,6,0,0,1,
					0,8,7,0,0,5,0,0,0,
					0,0,0,0,0,0,0,8,2,
					3,0,0,1,0,4,0,0,6,
					0,0,4,3,0,8,0,0,0,
					0,0,9,5,0,0,4,3,0,
					0,0,6,0,0,0,0,0,0,
					9,0,0,0,0,1,2,5,0,
					2,0,3,7,0,9,0,0,0];

// Contoh Kunci Jawaban
var board_array_answer = [	5,3,2,9,8,6,7,4,1,
							4,8,7,2,1,5,3,6,9,
							6,9,1,4,3,7,5,8,2,
							3,2,5,1,7,4,8,9,6,
							7,6,4,3,9,8,1,2,5,
							8,1,9,5,6,2,4,3,7,
							1,5,6,8,2,3,9,7,4,
							9,7,8,6,4,1,2,5,3,
							2,4,3,7,5,9,6,1,8];

// instance object dari class Sudoku
var game = new Sudoku(board_array)

// instance object dari class Sudoku u/ jawaban
var game_answer = new Sudoku(board_array_answer)

// Show Soal board sudoku yang belum selesai
console.log('Soal---------------------')
game.printBoard();

// Generate Jawaban soal sudoku
game.solve()
// Show board sudoku yang telah selesai
console.log('Jawaban Yang Benar-------')
game.printBoard();

// Generate Board dari soal sudoku
console.log('Kunci Jawaban------------')
game_answer.printBoard()

// Validasi Kunci Jawaban dengan jawaban yang benar
console.log('Validasi Kunci Jawaban---')

// Validasi Array dari kunci jawaban dan hasil Solve dari program.
// Jika sama akan return True /correct, false meaning not correct
function arraysEqual(a1,a2) {
	if(JSON.stringify(a1)==JSON.stringify(a2)){
		return 'Kunci Jawaban Benar';
	}
	return 'Kunci Jawaban Salah';

}
console.log(arraysEqual(game.board, game_answer.board));