identifier helloworld.components.text
class text extends components

string content

func _construct(string textToStore)
content = textToStore
end

func _component-return(string key)
match key
case "text"
return content
end
end
end