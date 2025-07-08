Feature: demo feature

    @demo
    Scenario Outline: Run my first test

        Given user opened the brower
        When  enter the login <id> and <password>
         Then After click on login home page should opened

        Examples:
            | TestID | id            | password     |
            | TC_01  | standard_user | secret_sauce |