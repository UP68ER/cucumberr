
@direct
Feature: Konto Direct

@direct
Scenario: Założenie konta

  Given Załóż konto Direct
  When Otwórz strone wniosku
  When Wpisz imie "Paweł" i nazwisko "Małek"
  When Wpisz PESEL "68021933488" i Numer telefonu '791164577'
  When Wpisz E-mail "pmalek74198@gmail.com" i go potwierdź
  Then Będziesz mógł przejść do kolejnego kroku
  When Wpisze Numer "HKJ613277" i daty z dowodu osobistego
  When Wpisze Miejsce urodzenia "Koniecpol" i nazwisko panienskie matki "Orzeł"
  When Wpisze Ulice "Szkolna", numer domu "24", numer mieszkania "2", kod pocztowy "42230" i miasto "Koniecpol"
  Then Zaznacze Dodatkowe informacje i przejde dalej