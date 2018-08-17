
@directexamples
Feature: Konto Direct

@directexamples
Scenario Outline: Założenie konta

  Given Załóż konto direct 
  When Otwórz strone
  When Wpisz Imię <Name> i Nazwisko <LastName>
  When Wpisz Pesel <PESEL> i Numer Telefonu <PhoneNumber>
  When Wpisz E-mail <Mail> i go Potwierdź <Mail2>
  Then Będziesz mógł przejsc do kolejnego kroku
  When Wpisz Numer <IdNumber> i daty z dowodu osobistego
  When Wpisz Miejsce urodzenia <BirthTown> i nazwisko panienskie matki <MaidenName>
  When Wpisz Ulice <Street>, numer domu <HouseNumber>, numer mieszkania <FlatNumber>, kod pocztowy <PostCode> i miasto <Town>
  Then Zaznacz Dodatkowe informacje i przejdz dalej


  Examples:

  |Name|LastName|PESEL|PhoneNumber|Mail|Mail2|IdNumber|BirthTown|MaidenName|Street|HouseNumber|FlatNumber|PostCode|Town|
  |"Paweł"|"Małek"|"52092824637"|"791164577"|"pmalek74198@gmail.com"|"pmalek74198@gmail.com"|"HKJ613277"|"Włoszczowa"|"Orzeł"|"Szkolna"|"24"|"2"|"42230"|"Koniecpol"|
  # |"Paweł1"|"Małek1"|"5209282463"|"79116457"|"pmalek74198@gmail"|"pmalek74198@gmail.com"|"HKJ61327"|"asd1"|"asd1"|"."|"."|"."|"42230"|"."|
  # |"mateusz"|"czerwinski"|"52092824637"|"791164577"|"pmalek74198@gmail.com"|"pmalek74198@gmail.com"|"HKJ61327"|"asd1"|"asd1"|"."|"."|"."|"42230"|"."|