# The-arrival-and-departure-times-of-trains

Minimum Number of Platforms Required

📌 Problem Statement

Given two arrays representing the arrival and departure times of trains at a railway station, the goal is to determine the minimum number of platforms required to ensure that no train waits for a platform.


📌 Understanding the Problem

Each train requires a platform from its arrival time until it departs.

If a train arrives before another train departs, an additional platform is needed.

We need to find the maximum number of trains present at the station at the same time.


📌 Constraints

✅ Time Complexity: O(n log n)

✅ Space Complexity: O(1) (in-place sorting and two-pointer traversal)

✅ Sorting Approach: We must sort the arr[] and dep[] arrays for efficient processing.


📌 Approach to Solve the Problem

Step 1: Sort the Arrival and Departure Arrays

Since trains arrive and depart at different times, sorting these times helps in efficiently tracking the number of platforms needed.

Step 2: Use Two-Pointer Technique

Pointer i for arr[] (arrival times).

Pointer j for dep[] (departure times).

If a train arrives before the previous one departs, increase the platform count.

If a train departs before the next train arrives, decrease the platform count.

Step 3: Track the Maximum Platforms Used

Maintain a variable to store the maximum number of platforms required at any moment.


📌 Algorithm (Step-by-Step Execution)

Sort both arr[] and dep[] arrays in ascending order.

Initialize two pointers, i = 0 (for arrivals) and j = 0 (for departures).

Initialize two variables:

platforms = 0 → Keeps track of current platform usage.

max_platforms = 0 → Stores the maximum number of platforms needed.

Iterate through both arr[] and dep[] arrays:

If a train arrives (arr[i] <= dep[j]), increase platforms and move i forward.

If a train departs (arr[i] > dep[j]), decrease platforms and move j forward.

Update max_platforms whenever platforms increases.

Return max_platforms as the final result.


📌 How to Run the Code?
Save the JavaScript/Python code in a file.

Run the script in a terminal or browser console.

Input train arrival and departure times.

Get the minimum number of platforms needed.
