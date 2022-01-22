# Given the participants' score sheet for your University Sports Day, you are required to find the
# runner-up score. You are given n scores. Store them in a list and find the score of the runner-up.

def runner_up(scores):
    scores.sort()
    largest = max(scores)
    scores.remove(largest)
    if(max(scores) == largest):
        scores.remove(largest)
        print('Runner-up score is: ', max(scores))
    else:
        print('Runner-up score is: ', max(scores))


runner_up([2, 3, 6, 6, 5])
