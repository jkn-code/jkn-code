Mqm.text += `







*** Ждать
??- 1
.. Развить
:: if (кран == 1) вода_в_ведре++
:: if (температура_ведра > 20) температура_ведра -= 5 / (вода_в_ведре + 0.1)
:: if (температура_ведра < 20) температура_ведра = 20
:: if (температура_ведра > 1000) страница = "ведро сгорело"
:: if (подогрев == 1) температура_ведра += 50 / (вода_в_ведре + 0.1)
:: if (реагент1 == 1) if (вода_в_ведре == 0) страница = "ведро сгорело"
:: if (реагент1 == 1) if (вода_в_ведре > 0) страница = "Реакция1"
:: if (вода_в_ведре > 10) страница = "перелив"



*** Развить
??- страница == "ведро сгорело"
.. ведро сгорело
??- страница == "Реакция1"
.. Реакция1
??- страница == "готово"
.. готово
??- страница == "низкая темп."
.. низкая темп.
??- страница == "высокая темп."
.. высокая темп.
??- страница == "план сделан"
.. план сделан
??- страница == "мало"
.. мало
??- страница == "много"
.. много
??- страница == "перелив"
.. перелив
??- 1
.. Процесс





*** Реакция1
??- 1
.. Развить
:: if (вода_в_ведре < 5) страница = "мало"
:: if (вода_в_ведре > 5) страница = "много"
:: if (температура_ведра < 80) страница = "низкая темп."
:: if (температура_ведра > 95) страница = "высокая темп."
:: if (вода_в_ведре == 5) 
::  if (температура_ведра > 80)  
::   if (температура_ведра < 95) страница = "готово"
:: if (страница == "готово") организмы++
:: if (организмы == 3) страница = "план сделан"
















`