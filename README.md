# ELEC390Project

A parody website of www.whitehouse.gov

This project will use Node.js to run a web application that scrapes pages from the White House's website, substitutes popular
words for much sillier ones and then host the new pages on the parody website.

## Getting Started
* verify that you have Node.js installed. In your terminal try the following command. If the command does not output "v6.something.something" google how to get the latest version of Node.js
~~~~
willalley@Wills-MacBook-Pro:~/repo/ELEC390Project$ node -v
v6.9.1
~~~~
* verify that you have Python 2 installed. Type `python` into your terminal, you should see a similar output:
~~~~
willalley@Wills-MacBook-Pro:~/repo/ELEC390Project$ python
Python 2.7.10 (default, Jul 30 2016, 19:40:32) 
[GCC 4.2.1 Compatible Apple LLVM 8.0.0 (clang-800.0.34)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
~~~~
* type `exit()` to quit the Python interpreter
* if you do not have python, visit their [downloads page](https://www.python.org/downloads/) to get started
* verify that you have pip installed. Pip is a package manager for python. Enter `pip -V` into your terminal. You should see something like this:
~~~~
willalley@Wills-MacBook-Pro:~/repo/ELEC390Project$ pip -V
pip 9.0.1 from /Library/Python/2.7/site-packages/pip-9.0.1-py2.7.egg (python 2.7)
~~~~
* If you are missing pip on your system, consult the [pip installation guide](http://docs.python-requests.org/en/master/user/install/)

* clone the repository: `$git clone https://github.com/qwalley/ELEC390Project.git`
* navigate to the folder: `$cd ELEC390Project/`
* install dependencies: `$npm install`
* get to work!

## Running the App
* from the project's root folder, check for new dependencies: `$npm install`
* navigate to `src` : `$cd src`
* start the server: `$node server.js`
* open a web browser, and enter `http://localhost:8000/` as the URL
