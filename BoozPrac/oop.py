class Language:

    def say_goodbye(self):
        print('wave hand')
    
    def wake_up(self):
        print('good morning')
    


class English(Language):

    def say_hi(self):
        print('Hello')

class Spanish:

    def say_hi(self):
        print('Hola')

class Portuguese:

    def say_hi(self):
        print('Oi')

def speak(person):
    person.say_hi()

rich = English()
francisco = English()
dennis = Spanish()
katherine = Portuguese()


rich.wake_up()