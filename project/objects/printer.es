identifier helloworld.objects.printer
class printer extends object

import helloworld.components.text as textComponent

componentlist text

func _init():
text.set-type(textComponent)
end

func special-print():
print(array.to-string(text.get("text")))
end