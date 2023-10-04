def reverse_string(str)
  # type your code in here
  new_string = ""
  i = str.length - 1
  while i >= 0 do
    new_string << str[i]
    i -= 1
  end
  new_string
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution