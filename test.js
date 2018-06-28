var tape = require('tape')
var DWS2 = require('@dwcore/dws2')
var DWS = require('stream')
var DWSS = require('./')

tape('DWSS Tests: dwStream Shifts Next', function (t) {
  var dwpt = DWS2()

  dwpt.write('greetings')
  dwpt.write('martian')

  t.same(DWSS(dwpt), Buffer.from('greetings'))
  t.same(DWSS(dwpt), Buffer.from('martian'))
  t.end()
})

tape('DWSS Tests: dwStream Shifts Next With Core', function (t) {
  var dwpt = DWS.PassThrough()

  dwpt.write('greetings')
  dwpt.write('martian')

  t.same(DWSS(dwpt), Buffer.from('greetings'))
  t.same(DWSS(dwpt), Buffer.from('martian'))
  t.end()
})

tape('DWSS Tests: dwStream Shifts Next With Object Mode', function (t) {
  var dwpt = DWS2({objectMode: true})

  dwpt.write({greetings: 1})
  dwpt.write({martian: 1})

  t.same(DWSS(dwpt), {greetings: 1})
  t.same(DWSS(dwpt), {martian: 1})
  t.end()
})

tape('DWSS Tests: dwStream Shifts Next With Object Mode With Core', function (t) {
  var dwpt = DWS.PassThrough({objectMode: true})

  dwpt.write({greetings: 1})
  dwpt.write({martian: 1})

  t.same(DWSS(dwpt), {greetings: 1})
  t.same(DWSS(dwpt), {martian: 1})
  t.end()
})
