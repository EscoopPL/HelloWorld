identifier helloworld.runfiles.entrypoint
runfile entrypoint

import helloworld.objects.printer
import helloworld.components.text

func run(array[string] args)
printer textPrinter
textPrinter.add-component(text.new("Hello, "))
textPrinter.add-component(text.new("World!"))
textPrinter.special-print()
end