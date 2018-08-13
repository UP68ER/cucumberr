

@directErrors1
Feature: Konto Direct

@error1
Scenario: Założenie konta - błędy

  Given Błędy przy zakładaniu konta Direct
  When Otwórz strone wniosku
  When Wpisz złe imie i nazwisko
  When Wpisz zły PESEL i zły numer telefonu
  When Wpisz zły E-mail i źle go potwierdź
  Then Oczekuj na błędy