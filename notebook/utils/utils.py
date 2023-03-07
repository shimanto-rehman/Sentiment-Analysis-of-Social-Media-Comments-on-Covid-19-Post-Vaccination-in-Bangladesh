from sklearn.utils.multiclass import unique_labels
from sklearn.metrics import confusion_matrix
import pickle
import random
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, precision_recall_fscore_support


def visualize_random_sample(dataframe, train_label, targel_label, n: int = 5):
    """
    Visualize random sample of dataframe.
    :param dataframe: dataframe to visualize
    :param train_label: label of train column
    :param targel_label: label of target column
    :param n: number of samples to visualize
    """
    random_index = random.randint(0, len(dataframe)-n)

    for row in dataframe[[train_label, targel_label]][random_index:random_index+n].itertuples():
        _, trl, tal = row
        print(f"{train_label} -> {trl}")
        print(f"{targel_label} -> {tal}")
        print("-\n")


# viszualize the result with confusion matrix


def plot_confusion_matrix(y_true, y_pred, classes,
                          normalize=False,
                          title=None,
                          cmap=plt.cm.Blues):
    """
    This function prints and plots the confusion matrix.
    Normalization can be applied by setting `normalize=True`.


    """
    if not title:
        if normalize:
            title = 'Normalized confusion matrix'
        else:
            title = 'Confusion matrix, without normalization'

    # Compute confusion matrix
    cm = confusion_matrix(y_true, y_pred)
    # Only use the labels that appear in the data
    classes = classes[unique_labels(y_true, y_pred)]
    if normalize:
        cm = cm.astype('float') / cm.sum(axis=1)[:, np.newaxis]
        print("Normalized confusion matrix")
    else:
        print('Confusion matrix, without normalization')

    print(cm)

    fig, ax = plt.subplots(figsize=(10, 10))
    im = ax.imshow(cm, interpolation='nearest', cmap=cmap)
    ax.figure.colorbar(im, ax=ax)
    # We want to show all ticks...
    ax.set(xticks=np.arange(cm.shape[1]),
           yticks=np.arange(cm.shape[0]),
           # ... and label them with the respective list entries
           xticklabels=classes, yticklabels=classes,
           title=title,
           ylabel='True label',
           xlabel='Predicted label')

    # Rotate the tick labels and set their alignment.
    plt.setp(ax.get_xticklabels(), rotation=45, ha="right",
             rotation_mode="anchor")

    # Loop over data dimensions and create text annotations.
    fmt = '.2f' if normalize else 'd'
    thresh = cm.max() / 2.
    for i in range(cm.shape[0]):
        for j in range(cm.shape[1]):
            ax.text(j, i, format(cm[i, j], fmt),
                    ha="center", va="center",
                    color="white" if cm[i, j] > thresh else "black")
    fig.tight_layout()
    return ax


def build_model(algorithm, train_sentence, train_label):
    model_pipeline = Pipeline([
        ('tfidf', TfidfVectorizer()),
        ('Algorithum', algorithm)
    ])
    model_pipeline.fit(train_sentence, train_label)
    return model_pipeline


# Calculate Accuracy


def calculate_results(y_true, y_pred):
    model_accuracy = accuracy_score(y_true, y_pred) * 100
    precision, recall, f1, _ = precision_recall_fscore_support(
        y_true, y_pred, average='weighted')
    model_result = {
        'accuracy': model_accuracy,
        'precision': precision,
        'recall': recall,
        'f1': f1
    }
    return model_result


# function for save model
def save_model(model, model_name):
    import pickle
    with open(f'models/{model_name}.pkl', 'wb') as f:
        pickle.dump(model, f)

    print(f"Model saved as {model_name}.pkl")


# function for load model
def load_model(model_name, path):

    with open(f'{path}.pkl', 'rb') as f:
        model = pickle.load(f)
    return model


def plot_confustion_matrix(confusion_matrix, class_names, figsize=(10, 7), fontsize=14):
    """
    Plot confusion matrix.
    :param confusion_matrix: confusion matrix
    :param class_names: class names
    :param figsize: figure size
    :param fontsize: font size
    """

    df_cm = pd.DataFrame(
        confusion_matrix, index=class_names, columns=class_names,
    )
    fig = plt.figure(figsize=figsize)
    try:
        heatmap = sns.heatmap(df_cm, annot=True, fmt="d")
    except ValueError:
        raise ValueError("Confusion matrix values must be integers.")
    heatmap.yaxis.set_ticklabels(
        heatmap.yaxis.get_ticklabels(), rotation=0, ha='right', fontsize=fontsize)
    heatmap.xaxis.set_ticklabels(
        heatmap.xaxis.get_ticklabels(), rotation=45, ha='right', fontsize=fontsize)
    plt.ylabel('True label')
    plt.xlabel('Predicted label')

    return fig
