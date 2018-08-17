

@directErrors1
Feature: Konto Direct

@error1
Scenario: Założenie konta - błędy

  Given Błędy przy zakładaniu konta Direct
  When Otwórz strone wniosku
  When Wpisz złe imie "Paweł1" i nazwisko "Małek1"
  When Wpisz zły PESEL "6802193348" i zły numer telefonu "79116457"
  When Wpisz zły E-mail "pmalek74198@gmail" i źle go potwierdź "pmalek74198@gmail.com"
  Then Oczekuj na błędy