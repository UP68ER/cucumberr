
@directErrors2
Feature: Konto Direct

@directErrors2
Scenario: Założenie konta

  Given Załóż konto Direct
  When Otwórz strone wniosku
  When Wpisz imie "Paweł" i nazwisko "Małek"
  When Wpisz PESEL "68021933488" i Numer telefonu '791164577'
  When Wpisz E-mail "pmalek74198@gmail.com" i go potwierdź
  Then Będziesz mógł przejść do kolejnego kroku
  When Wpisze zły numer i daty z dowodu osobistego
  When Wpisze złe miejsce urodzenia i nazwisko panienskie matki
  When Uzupełnie źle adres zamieszkania
  Then Zaznacze dodatkowe informacje i sprawdze czy wyświetlają się błędy